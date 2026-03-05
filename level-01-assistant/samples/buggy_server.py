import http.server
from http.server import ThreadingHTTPServer
import json
import threading
import time
from urllib.parse import urlparse

cache = {}
cache_lock = threading.Lock()


class APIHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/users":
            users = self.get_users()
            self.send_json(200, users)
        elif path.startswith("/users/"):
            user_id = path.split("/")[-1]
            user = self.get_or_fetch_user(user_id)
            self.send_json(200, user)
        else:
            self.send_json(404, {"error": "Not found"})

    def send_json(self, status_code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def get_users(self):
        return [{"id": i, "name": f"User {i}"} for i in range(100)]

    def get_or_fetch_user(self, user_id):
        with cache_lock:
            user = cache.get(user_id)
            if user is None:
                user = self.fetch_user(user_id)
                cache[user_id] = user
        return user

    def fetch_user(self, user_id):
        time.sleep(0.1)
        return {"id": user_id, "name": f"User {user_id}"}


if __name__ == "__main__":
    server = ThreadingHTTPServer(("", 8080), APIHandler)
    server.serve_forever()

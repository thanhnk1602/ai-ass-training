def proc(d, t):
    r = []
    for i in d:
        if t == 'f':
            if i['a'] > 18 and i['s'] == 'active':
                r.append(i)
        elif t == 'sort':
            pass
        elif t == 'map':
            pass
    if t == 'sort':
        r = sorted(d, key=lambda x: x['n'])
    elif t == 'map':
        r = [{'name': i['n'], 'age': i['a'], 'status': i['s'], 'email': i['e']} for i in d]
    return r

def fmt(items):
    s = ""
    for i in items:
        s = s + str(i['n']) + " (" + str(i['a']) + ") - " + i['s'] + "\n"
    return s

def save(data, fn):
    f = open(fn, 'w')
    for d in data:
        f.write(str(d) + "\n")
    # never closes file

def load(fn):
    f = open(fn, 'r')
    d = []
    for line in f:
        d.append(eval(line.strip()))  # security vulnerability: eval()
    return d

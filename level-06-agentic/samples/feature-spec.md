# Feature: Activity Feed

## User Story
As a user, I want to see a real-time activity feed of all wallet transactions and account events so I can track what's happening.

## Requirements

### Events to Track
- wallet_connected
- wallet_disconnected
- login
- logout
- primary_wallet_changed
- profile_updated

### Display
- Chronological list (newest first)
- Each event shows: icon, description, relative timestamp ("2 min ago")
- Paginated: 20 events per page, "Load more" button
- Filter by event type (dropdown)

### Backend
- New `events` table in the database
- Fields: id, userId, type, metadata (JSON), createdAt
- API endpoint: GET /api/events?page=1&type=wallet_connected
- Requires authentication
- Returns paginated results with total count

### Frontend
- New ActivityFeed component on the Dashboard page
- Auto-refresh every 30 seconds
- Loading skeleton while fetching
- Empty state: "No activity yet"
- Error state with retry button

### Technical Constraints
- Must use existing auth middleware
- Must follow existing code patterns
- Include database migration
- Include tests for the API endpoint

# Multi-Service Project

This project consists of multiple services (auth, blog, comments, feedbacks, reactions, and subscriber) each running in its own Docker container. The services are developed in a way that changes made to the code will be reflected immediately without restarting the containers.

## Services Overview

- **auth**: Authentication service running on port 3000.
- **blog**: Blog service running on port 3001.
- **comments**: Comments service running on port 3002.
- **feedbacks**: Feedback service running on port 3003.
- **reactions**: Reactions service running on port 3004.
- **subscriber**: Subscriber service running on port 3005.

Each service is built and run in its own Docker container, using its respective source code from the `services` folder.

## Prerequisites

- Docker (including Docker Compose) must be installed on your machine.
- Make sure the `Dockerfile` for each service is properly configured to run in development mode, using a command like `npm run dev` (or the appropriate command for your framework).

## How to Run the Project

### Step 1: Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/masumbillah360/micro-services.git
cd your-repo

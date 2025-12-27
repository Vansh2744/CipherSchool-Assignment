git clone <repository-url>
cd CipherSQLStudio

## Backend Setup

cd backend
npm install

### Create .env file inside backend/

PORT=3000
MONGO_URI=your_mongodb_connection_string
POSTGRES_URL=your_postgresql_connection_string
OPENAI_API_KEY=your_openai_or_gemini_api_key

npm run dev


## Frontend Setup

cd frontend
npm install

### Create .env file inside frontend/
VITE_BACKEND_URL=your_backend_url

npm run dev


## Database Setup

### MongoDB

- Stores assignment metadata

- Collection: assignments

   - Fields:

        - title

        - difficulty

        - description

        - question

        - sampleTables

### PostgreSQL

- It store sample tables for execution query

- It allows only SELECT queries

- Tables must exist in the public schema

   - Example:
     
     CREATE TABLE employees (
        id SERIAL PRIMARY KEY,
        name TEXT,
        department TEXT,
        salary INT
    );

### LLM Integration (LangChain)

- LangChain is used as an abstraction layer over the LLM

- Prompt templates enforce hint-only responses


## Technology Choices and Justification

### Frontend

- React + Vite

  - Fast development and build times

  - Component-based architecture

- Axios

  - Clean API communication

- Monaco Editor

  - Rich SQL editing experience

### Backend

- Node.js + Express

  - Lightweight and scalable REST API

- MongoDB

  - Flexible schema for assignments

- PostgreSQL

  - Real SQL execution environment

- pg (node-postgres)

  - Secure PostgreSQL connection pooling

### AI Layer

- LangChain

  - prompt handling

  - chaining

- Groq

  - Open source model

  - Very low latency
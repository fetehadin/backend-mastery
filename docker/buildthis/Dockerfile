# ==========================================
# STAGE 1: The Builder
# We use this stage only to download and compile dependencies.
# ==========================================
FROM python:3.11-alpine AS builder

WORKDIR /app

COPY requirements.txt .
# Install dependencies into a local folder (--user) so they are easy to copy later
RUN pip install --user --no-cache-dir -r requirements.txt

# ==========================================
# STAGE 2: The Final Production Image
# This is the actual image you will run. 
# ==========================================
FROM python:3.11-alpine

WORKDIR /app

# Copy ONLY the clean, pre-compiled dependencies from the builder stage
COPY --from=builder /root/.local /root/.local

# Copy your actual application code
COPY . .

# Tell Python where to find the dependencies we just copied
ENV PATH=/root/.local/bin:$PATH

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
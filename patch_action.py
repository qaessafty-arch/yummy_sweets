with open('.github/workflows/deploy.yml', 'r') as f:
    content = f.read()

content = content.replace("path: './dist'", "path: './docs'")

with open('.github/workflows/deploy.yml', 'w') as f:
    f.write(content)

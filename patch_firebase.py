with open('firebase.json', 'r') as f:
    content = f.read()

content = content.replace('"public": "dist"', '"public": "docs"')

with open('firebase.json', 'w') as f:
    f.write(content)

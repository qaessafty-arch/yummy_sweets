with open('vite.config.ts', 'r') as f:
    content = f.read()

new_config = """    build: {
      outDir: 'docs',
      emptyOutDir: true
    },"""

if 'server: {' in content:
    content = content.replace('server: {', new_config + '\n    server: {')

with open('vite.config.ts', 'w') as f:
    f.write(content)

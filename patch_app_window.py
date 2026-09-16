with open('builder/app.js', 'r') as f:
    content = f.read()

content = content.replace("window.app = app;", "")

init_block = """// Auto-run boot sequence on DOMContentLoaded
if (document.readyState === 'loading') {"""

new_init_block = """// Expose app globally for inline event handlers immediately
window.app = app;

// Auto-run boot sequence on DOMContentLoaded
if (document.readyState === 'loading') {"""

content = content.replace(init_block, new_init_block)

with open('builder/app.js', 'w') as f:
    f.write(content)

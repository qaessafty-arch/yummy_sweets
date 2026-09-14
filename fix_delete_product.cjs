const fs = require('fs');
let js = fs.readFileSync('builder/app.js', 'utf8');

const targetStr = `  deleteProduct(id) {
    if (!confirm(this.t('prodDeleteConfirm'))) return;`;

const replacementStr = `  deleteProduct(id) {
    const modal = document.getElementById('customConfirmModal');
    const msg = document.getElementById('confirmMessage');
    const btnCancel = document.getElementById('confirmCancelBtn');
    const btnOk = document.getElementById('confirmOkBtn');
    
    msg.textContent = this.t('prodDeleteConfirm') || 'Are you sure you want to delete this product?';
    
    const cleanup = () => {
      modal.classList.remove('is-open');
      btnCancel.onclick = null;
      btnOk.onclick = null;
    };
    
    btnCancel.onclick = cleanup;
    
    btnOk.onclick = () => {
      cleanup();
      const oldLen = this.products.length;
      this.products = this.products.filter(p => p.id !== id);
      this.order = this.order.filter(item => item.productId !== id);
      
      this.selectedProductId = this.products.length > 0 ? this.products[0].id : null;
      this.pendingImageData = this.selectedProductId && this.products.length > 0 && this.products[0].img ? this.products[0].img : '';
      
      this.saveProducts();
      this.renderMenu();
      this.renderTray();
      this.renderOrder();
      this.updateOrderCount();
      this.renderPanelTab('products');
      this.showToast(this.t('toastDeleted') || 'Deleted', 'success');
    };
    
    modal.classList.add('is-open');
    return;`;

js = js.replace(targetStr, replacementStr);

fs.writeFileSync('builder/app.js', js);
console.log("Updated deleteProduct");

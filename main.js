window.onload = () => {
  const qrCode = document.querySelector('sl-qr-code');
  const input = document.querySelector('sl-input');
  const button = document.querySelector('sl-button');
  const color = document.querySelector('sl-color-picker');

  customElements.whenDefined('sl-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('sl-input', () => {
      qrCode.value = input.value;
    });
    color.addEventListener('sl-input', () => {
      qrCode.fill = color.value;
    });
  });

  button.onclick = () => {
    const canvas = qrCode.canvas;
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = canvas.toDataURL();
    a.download = 'qrCode.png';
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }
}
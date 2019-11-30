document.getElementById('btn').onclick = function openwin() {
    window.open("https://twitter.com/share?url=null&text=" + document.getElementById('id_textBox1').value);
  }
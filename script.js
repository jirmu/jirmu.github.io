	function copifier() {
  
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
}
function secondsightify(t) {
			if([...t].some(x=>(0xe0000<x.codePointAt(0)&&x.codePointAt(0)<0xe007f))) { document.querySelector('#conversion').innerText="";return (t=>([...t].map(x=>(0xe0000<x.codePointAt(0)&&x.codePointAt(0)<0xe007f)?String.fromCodePoint(x.codePointAt(0)-0xe0000):x).join``))(t) } 
			else { document.querySelector('#conversion').innerHTML="";return (t=>[...t].map(x=>(0x00<x.codePointAt(0)&&x.codePointAt(0)<0x7f)?`${String.fromCodePoint(x.codePointAt(0)+0xe0000)}`:x).join``)(t) }
		}
		function update() {
			document.getElementById('output').value = secondsightify(document.getElementById('input').value);
		}

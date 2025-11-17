const cart = [];
function add(id){
    cart.push({id, name: 'Produto '+id, price: id===1?249: id===2?129:79});
    document.getElementById('cartList') && (document.getElementById('cartList').innerText = cart.map(i=> i.name + ' — R$'+ i.price).join('\n'));
    alert('Produto adicionado (demo).');
}

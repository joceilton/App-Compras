$(function() {

    let menuOpenMobile = $(".menu-open-mobile li a")
    let menuPrincipal = $(".menu-principal")

    //$('.btnModal').click()

    // Abrir Menu Mobile
    menuOpenMobile.on("click", function() {
        menuPrincipal.toggle('slow')
    })

    /* Tour */

    //página Carteira
    var carteira = new Anno([{
        target  : '.saldo', // second block of code
        position: 'top',
        content : 'Aqui você vê o seu saldo.'
      }, {
        target  : '.compras',
        position: 'top',
        content : "Aqui você vê o seu saldo de compras.",
      }, {
        target  : '.extra',
        position: 'top',
        content : "Aqui você vê o seu saldo extra"
      }, {
        target  : '.adicionar-saldo-compras',
        position: 'top',
        content : "Retira de Saldo e adiciona para compras ou extra"
      }, {
        target  : '.adicionar-saldo-carteira',
        position: 'bottom',
        content : "Retira de Compras e adiciona para saldo ou extra"
      }
      ])
      
      carteira.show()





})
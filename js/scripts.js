$(function() {

    let menuOpenMobile = $(".menu-open-mobile li a")
    let menuPrincipal = $(".menu-principal")

    //$('.btnModal').click()

    // Abrir Menu Mobile
    menuOpenMobile.on("click", function() {
        menuPrincipal.toggle('slow')
    })

})
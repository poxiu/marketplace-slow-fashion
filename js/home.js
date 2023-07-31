

export const home = () => {
    const html = `
<div>
        <div class="centrar-diapositiva">
            <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
                padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
                border-radius: 8px; will-change: transform;">
                <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFp8ChFkew&#x2F;view?embed">
                /iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFp8ChFkew&#x2F;view?utm_content=DAFp8ChFkew&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
        </div>

    <!-- BENEFICIOS -->

    <h1 class="titulo">Beneficios!</h1>
    <div class="tarjetas">
        <div class="container-card">
            <div>
                <i class="icons fa-solid fa-shirt" style="color: #666970;"></i>
                <br>
                <br>
                <h4 class="titulo">Dale una Segunda oportunidad a tu Ropa!</h4>
            </div>

            <div>
                    <i class="icons fa-solid fa-hand-holding-heart" style="color: #666970;"></i>
                <br>
                <br>
                <h4 class="titulo">Ayuda al planeta creando hábitos Sostenibles</h4>
            </div>

            <div>
                    <i class="icons fa-regular fa-money-bill-1" style="color: #666970;"></i>
                <br>
                <br>
                <h4 class="titulo">Recibe tu pago por lo que vendas!</h4>
            </div>
        </div>
    </div>
</div>
    
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = html;

    //const btnStart = divElement.querySelector('.buttonStart');
    //document.querySelector('.home a').style.display = 'block';
    window.location.hash = '#/home'

    //btnStart.addEventListener('click', () => {
        //window.location.hash = '#/signinForm'
    //});
    return divElement;
};
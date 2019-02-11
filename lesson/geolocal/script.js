'use strict'

if (navigator.geolocation){
    const successCallBack = (position) => {
        console.log('position',position)
        const link = document.createElement('a')
        link.setAttribute('href',`https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`)
        link.innerText = 'Click CLIIIIICK'
        link.setAttribute('target', '_blank')
        document.querySelector('body').appendChild(link)
    }
    const errorCallBack = (error) => {
        console.log('error',error)
        const GEO_ERRORS = {
            PERMISSION_DENIED: 1,
            POSITION_UNAVAILABLE: 2,
            TIMEOUT: 3
        }
        if (error.code === GEO_ERRORS.PERMISSION_DENIED) {
            alert('ALED Give me u position')
        }
    }
    navigator.geolocation.getCurrentPosition(successCallBack,errorCallBack);
}
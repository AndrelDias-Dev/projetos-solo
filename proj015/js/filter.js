export function checkFilter() {

    const check = document.querySelector('#check')

    const valorCheck = check.value;

    check.addEventListener('change', () => {

        if (!valorCheck === '') {
            return ''
        }

        if (valorCheck === 'Ação'){
            return valorCheck
        }
        
      
    })


}  






export const Bulb = (props) => {

    let { isOn } = props;

    const zarovka = document.createElement('div');
    zarovka.classList.add('bulb', 'bulb--on');

    if (!isOn) {j
        zarovka.classList.remove('bulb--on');
    }

    zarovka.addEventListener('click', () => {
        zarovka.replaceWith(
            Bulb({
                isOn: !isOn
            })
        )
    })

    return zarovka;
}
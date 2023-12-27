import { useEffect, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import "./Payments.css";

const Payments = () => {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        const cardNum = document.getElementById('card_num');
        const card = document.getElementById('card');

        cardNum.addEventListener('input', function (e) {
            if (e.key !== 'Backspace') {
                if (
                    this.value.length === 4 ||
                    this.value.length === 9 ||
                    this.value.length === 14
                ) {
                    this.value = this.value += ' ';
                }
            }
        });

        const xRange = -10;
        const xMiddle = 0;
        const yRange = 10;
        const yMiddle = 20;

        document.body.addEventListener('mousemove', function (e) {
            const yPerc = e.clientX / window.innerWidth;
            const xPerc = e.clientY / window.innerHeight;
            card.style.transform =
                'rotateY(' +
                (yMiddle + (yPerc * yRange - yRange / 2)) +
                'deg) rotateX(' +
                (xMiddle + (xPerc * xRange - xRange / 2)) +
                'deg)';
        });

        const inputEls = document.querySelectorAll('input');
        for (let i = 0, len = inputEls.length; i < len; i++) {
            inputEls[i].addEventListener('blur', function () {
                this.classList.add('touched');
            });
        }

        const expirationInput = document.getElementById('expiration');
        expirationInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(
                /(\d{2})(\d{2})/,
                '$1/$2'
            ).replace(
                /[^\d\/]/g,
                ''
            ).substring(0, 5);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Éxito',
            text: 'Pago completado',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            clearCart();
        });
    };

    return (
        <main>
            <form
                className="form-credit"
                onSubmit={handleSubmit}
            >
                <div className="card__container">
                    <h2>Información de pago</h2>
                    <div className="card" id="card">
                        <div className="field card-num">
                            <p>Número de Tarjeta</p>
                            <input
                                id="card_num"
                                required
                                pattern="(\d{4}\s?){4}"
                                placeholder="0000 0000 0000 0000"
                                maxLength="19"
                            />
                            <label htmlFor="card_num"></label>
                        </div>
                        <div className="field name">
                            <p>Nombre y Apellidos</p>
                            <input id="name" required placeholder="AccessiSolutions" />
                            <label htmlFor="name"></label>
                        </div>
                        <div className="field expiration">
                            <p>Caduca en</p>
                            <input
                                id="expiration"
                                required
                                placeholder="12/26"
                                pattern="\d{2}/\d{2}"
                            />
                            <label htmlFor="expiration"></label>
                        </div>
                        <div className="card-type">
                            <input
                                type="radio"
                                name="card_type"
                                value="visa"
                                id="card_type_visa"
                                defaultChecked
                            />
                            <label
                                className="card-type__logo mastercard"
                                htmlFor="card_type_mastercard"
                            >
                                Mastercard
                            </label>
                        </div>
                    </div>

                    <div className="field csv">
                        <p>CSV</p>
                        <input
                            id="csv"
                            required
                            pattern="\d{3}"
                            placeholder="000"
                            maxLength="3"
                        />
                        <label htmlFor="csv"></label>
                    </div>

        <div className="field submit">
          <button className="btn-submit" onClick={clearCart}>Completar Pago</button>
        </div>
      </div>
    </form>
      </main>
  );
};

export default Payments;

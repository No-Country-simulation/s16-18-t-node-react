import { paths } from '@/app/router/paths';
import { instance } from '@/common/config/axios.config';
import { MP_PUBLIC_KEY } from '@/config';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import { useNavigate } from 'react-router-dom';

initMercadoPago(MP_PUBLIC_KEY);


export const DetailPaymentMethodMPPage = () => {
	const navigate = useNavigate();

	const { price = 500, label = "Car puling viaje", travelID = "f5d3af82-e48a-42ca-804f-08dcb37a6400" } = {};


	const onSubmit = async (param: unknown) => {
		try {
			await instance.post(`/travel/create-passenger/${travelID}`, param);
			alert("pago realizado");
			navigate(paths.home)
		} catch (error) {
			alert("Fallo")
		}
	}

	return (
		<Payment
			initialization={{
				amount: price,
				items: {
					itemsList: [{
						name: label,
						units: 1,
						value: price
					}],
					totalItemsAmount: 1
				},
			}}

			customization={{
				paymentMethods: {
					debitCard: "all",
					creditCard: "all"
				},
				visual: {
					preserveSavedCardsOrder: true
				}

			}}
			locale='es'
			onSubmit={onSubmit}
		/>

	)
}

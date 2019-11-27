import { required, minLength, numeric, minValue, url } from 'vuelidate/lib/validators'

export default {
    form: {
        name: {
            required,
            minLength: minLength(3)
        },
        price: {
            required, numeric,
            minValue: minValue(0.1)
        },
        url: {
            url, required
        }
    }
}

class Form {
    constructor(formElement) {
        this.form = formElement;
        this.formData = {};
        this.flagEdit = false;
    }
    get elementsForm() {
        return this.form.elements;
    }
    save() {
        const eles = this.elementsForm;
        const len = eles.length;
        for (let i = 0; i < len; i += 1) {
            const attr = eles[i].getAttribute('name');
            this.formDatabody[attr] = this.form[attr].value;
        }
        console.log(body);
    }
}

module.exports = Form;

import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSubmitted: false };
    }

    handleSubmit() {
        this.setState({ isSubmitted: true });
    }

    render() {

        let ContactForm;

        if (this.state.isSubmitted) {
            ContactForm = (
                <div className='contact-submit-message'>
                    送信完了
                </div>
            );
        }else {
            ContactForm = (
                <form onSubmit={() => {this.handleSubmit()}}>
                    <p>メールアドレス（必須）</p>
                    <input />
                    <p>お問い合わせ内容（必須）</p>
                    <textarea />
                    <input
                        type='submit'
                        value='送信'
                    />
                </form>
            );
        }

        return (
        <div className='contact-form'>
            {ContactForm}
        </div>
        );
    }
}

export default ContactForm;

<template>
    <div class="contact">

        <form>
            <span v-show="allFieldsRequired">All Fields are required</span>

            <h1 class="caption">Let's meet</h1>

            <input type="text" @input="allFieldsRequired = false" v-model="details.fullname" placeholder="John Doe" id="fullname">
            <label class="sr-only" for="fullname">fullname</label>

            <input type="email" @input="allFieldsRequired = false" v-model="details.email" placeholder="johndoe@example.com" id="email">
            <label class="sr-only" for="email">email</label>

            <button class="business" @click.prevent="addPurpose('For project')">
                For Project <!--<span><i class="fa fa-facebook"></i></span>-->
            </button>
            <button class="to-speak" @input="allFieldsRequired = false" @click.prevent="addPurpose('Speak at an Event')">
                Speak at an Event
            </button>

            <textarea
                    v-model="details.message"
                    @input="allFieldsRequired = false"
                    rows="300px" id="message"
                    placeholder="Hey Gconnect, Just passing by ...">
                </textarea>

            <button class="submit-btn empty-purpose" @click.prevent="emptyPurpose" v-show="details.purpose == null">{{ purposeAlert }}</button>
            <button v-show="details.purpose" class="submit-btn" @click.prevent="sendEmail">Shoot it</button>
        </form>
    </div>
</template>

<script>

    import _ from 'lodash'

    export default {
        data() {
            return {
                purposeAlert: 'Shoot it',
                allFieldsRequired: false,
                show: false,
                details: {
                    fullname: null,
                    email: null,
                    purpose: null,
                    message: null
                },
                service_id: 'gmail',
                template_id: 'template_rQhaXHhW',
                user_id: 'user_J6Odr7ZAPz20EGq3RLR8A'
            }
        },

        methods: {


            clearWarning: _.debounce(() => {
                this.allFieldsRequired === true ? false : ''
            }, 1000),

            sendEmail() {
                if(
                    this.details.fullname !== null &&
                    this.details.email !== null &&
                    this.details.purpose !== null &&
                    this.details.message !== null
                ) {

                    const template_params = {
                        'from_email': this.details.email,
                        'from_name': this.details.fullname,
                        'purpose': this.details.purpose,
                        'message_html': this.details.message
                    }

                    emailjs.send(this.service_id,this.template_id,template_params,this.user_id);

                } else {

                    return this.allFieldsRequired = true

                }
            },

            addPurpose(purpose) {
                this.purposeAlert = 'Shoot it'
                this.details.purpose = purpose
            },

            emptyPurpose() {
                this.purposeAlert = 'Kindly enter purpose for reaching out.'
            }
        },

        mounted() {
            let script = document.createElement('script')
            script.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
            document.head.appendChild(script)
        }
    }
</script>

<style scoped>
    .caption:after{
        content:'';
        display: block;
        width: 50px;
        height: 5px;
        border-bottom:3px solid #FF4081;
        border-radius: 1px;
    }

    .contact{
        background: rgba(38,69,178,.8);
        grid-column: 3 / 4;
        grid-row: 1 / -1;
        min-height: 100vh;
        margin: 10px;
        display: grid;
        align-content: center;
        position: relative;
    }
    form{
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(12, 1fr);
    }
    #email, #fullname, #message, .submit-btn, form h1, form span{
        grid-column: 2 / 12;
    }
    form span{
        color: #fefefe;
    }

    .business{
        grid-column: 2 / 7;
        background: #94cd14;
        padding: 10px;
        outline: none;
        border: none;
        color: #fefefe;
        font-weight: 700;
    }
    .submit-btn{
        padding-left: 15px;
        height: 35px;
        background: #FF4081;
        border: none;
        outline: none;
        color: #fefefe;
        font-weight: 700;
    }
    .business span {
        opacity: 0;
    }
    .business:hover span {
        opacity: 1;
        transform: rotate(135deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    .to-speak{
        grid-column: 7 / 12;
        padding: 10px;
        outline: none;
        border: none;
        color: #fefefe;
        font-weight: 700;
    }
    #message{
        height: 100px;
    }

    .to-speak{
        background: #ffc100;
    }
    @media(max-width: 767px) {
        .contact{
            margin: 0 0 5px 0;
            padding-bottom: 50px;
        }

    }
</style>
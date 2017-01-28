import Ntask from '../ntask.js'
import Template from '../templates/user.js'

class User extends Ntask {
    constructor(body) {
        super()
        this.body = body
    }
    render() {
        this.renderUserData()
    }
    addEventListener() {
        this.userCancelClick()
    }
    renderUserData() {
        const opts = {
            method: 'GET',
            url: `${this.URL}/user`,
            json: true,
            headers: {
                authorization: localStorage.getItem('token')
            }
        }
        this.request(opts, (err, resp, data) => {
            if(err || resp.status === 412) {
                this.emit('error', err)
            }
            else {
                console.log(' ==============> FOI');
                console.log(data);
                this.body.innerHTML = Template.render(data)
                console.log(' ==============> END OF FOI');

                this.addEventListener()
            }
        })
    }
    userCancelClick() {
        const button = this.body.querySelector('[data-remove-account]')
        button.addEventListener('click', (e) => {
            e.preventDefault()
            if (confirm('Are you sure you want to delete this account?')) {
                const opts = {
                    method: 'DELETE',
                    url: `${this.URL}/user`,
                    headers: {
                        authorization: localStorage.getItem('token')
                    }
                }
                this.request(opts, (err, resp, data) => {
                    if(err || resp.status === 412) {
                        this.emit('remove-error', err)
                    }
                    else {
                        this.emit('remove-account')
                    }
                })
            }
        })
    }

}

module.exports = User

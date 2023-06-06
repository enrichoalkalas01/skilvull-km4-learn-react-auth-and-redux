import Axios from 'axios'
import Cookies from 'universal-cookie'
const ToolsCookies = new Cookies

const index = () => {
    const login = async () => {
        let username = document.querySelector("#username").value
        let password = document.querySelector("#password").value
        
        let config = {
            url: `https://647dd8ecaf984710854a76a9.mockapi.io/api/v1/users`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            let getDataUsers = await Axios(config)
            let dataUsers = getDataUsers.data
            let matchedUsers = null

            // Filter for matched by our username
            for ( let i = 0; i < dataUsers.length; i++ ) {
                if ( dataUsers[i].username === username ) {
                    matchedUsers = dataUsers[i]
                }
            }

            // Check if matched or note
            if ( !matchedUsers ) {
                throw new Error('username or password is not match!')
            } else {
                // Check if password matched
                if ( matchedUsers.password !== password ) {
                    throw new Error('username or password is not match!')
                } else {
                    // Create user data cookies
                    var currentDate = new Date()
                    var expiresDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000))
                    var expiresDateString = expiresDate.toISOString()

                    ToolsCookies.set('status_login', true, { expires: expiresDate })
                    ToolsCookies.set('user_data', JSON.stringify(matchedUsers), { expires: expiresDate })

                    // if done, redirect ? like homepages
                    window.location.href = '/'
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <section style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div>
                    <input type="text" placeholder="username" name="username" id="username" />
                </div>
                <div>
                    <input type="password" placeholder="password" name="password" id="password" />
                </div>
                <div>
                    <button id="login-btn" onClick={ login }>Submit</button>
                </div>
            </section>
        </>
    )
}

export default index
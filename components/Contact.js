export default function ContactForm() {
    return (
      <form name="contact" method="POST" action="/success"  data-netlify="true"   data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="wrapper">
          <label htmlFor="yourname">
            Nombre y apellido
          </label> 
  <input type="text" name="firstname" id="firstname" required />
         
        </div>
        <div className="wrapper">
          <label htmlFor="youremail">
          E-mail
          </label>
          <input type="email" name="email" required id="youremail" />
        </div>
        <div className="wrapper">
          <label htmlFor="yourmessage">
         Mensaje
          </label> 
          <textarea name="message" required id="yourmessage" rows="6"></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div>
          <button className="btn" type="submit">Enviar {">"}</button>
        </div>
      </form>
    )
  }
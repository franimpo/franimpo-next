export default function ContactForm() {
    return (
      <form name="contact" method="POST" action="/success"  data-netlify="true"   data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
  <input type="text" name="firstname" id="firstname" />
          <label htmlFor="yourname">
            Your Name:
          </label> <br />
          <input type="text" name="name" required id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input type="email" name="email" required id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea name="message" required id="yourmessage"></textarea>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
import MailIcon from '../assets/icons/icon--mail.svg'

export default function GetInTouch({ className }) {
  return (
    <>
      <a className={`button button--mail ${className || ''}`} href="/contact">
        <img src={MailIcon} alt="Mail icon" />
        Get In Touch
      </a>
    </>
  )
}
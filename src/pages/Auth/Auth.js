import LoginForm from '../../components/account/LoginForm'
import SignUpForm from '../../components/account/SignUpForm'
export default function Auth({ type, onClose }) {
  return type === 'login' ? <LoginForm /> : <SignUpForm />
}

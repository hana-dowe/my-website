import IconButton, { ButtonVariant } from '@/app/components/iconButton'
import GithubIcon from '@/app/components/icons/github'
import LinkedInIcon from '@/app/components/icons/linkedIn'
import MailIcon from '@/app/components/icons/mail'

type Props = {
  className?: React.ComponentProps<'div'>['className']
  variant?: ButtonVariant
}

const SocialButtons = (props: Props) => {
  const { className, variant = 'primary' } = props

  return (
    <div className={`flex flex-row gap-6 ${className}`}>
      <IconButton
        href="mailto:hanadowe@gmail.com"
        title="Open Email"
        ariaLabel="My Email"
        variant={variant}
      >
        <MailIcon />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/hanadowe/"
        title="Open LinkedIn"
        ariaLabel="My LinkedIn"
        variant={variant}
        newTab
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://github.com/hana-dowe"
        title="Open GitHub"
        ariaLabel="My GitHub"
        variant={variant}
        newTab
      >
        <GithubIcon />
      </IconButton>
    </div>
  )
}

export default SocialButtons

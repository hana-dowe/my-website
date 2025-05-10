type Props = {
  className?: React.ComponentProps<'svg'>['className']
}

const HomeIcon = (props: Props) => {
  const { className } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
      viewBox="0 0 74 67"
      data-testid="HomeRoundedIcon"
    >
      <path d="M29.0004 62.9999V42.9999H45.0004V62.9999C45.0004 65.1999 46.8004 66.9999 49.0004 66.9999H61.0004C63.2004 66.9999 65.0004 65.1999 65.0004 62.9999V34.9999H71.8004C73.6404 34.9999 74.5204 32.7199 73.1204 31.5199L39.6804 1.39988C38.1604 0.0398828 35.8404 0.0398828 34.3204 1.39988L0.880392 31.5199C-0.479608 32.7199 0.360392 34.9999 2.20039 34.9999H9.00039V62.9999C9.00039 65.1999 10.8004 66.9999 13.0004 66.9999H25.0004C27.2004 66.9999 29.0004 65.1999 29.0004 62.9999Z" />
    </svg>
  )
}

export default HomeIcon

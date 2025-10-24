import { Box } from '@mui/system'
import Image from 'next/image'

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src="/Spinner.svg" width={150} height={150} alt="loading..." />
    </Box>
  )
}

export default Loading

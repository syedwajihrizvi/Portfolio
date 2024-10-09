import Chip from '@mui/material/Chip'

interface Props {
    label: string
}

function Skill({label}: Props) {
    return (
        <Chip label={label} variant='outlined'/>
    )
}

export default Skill

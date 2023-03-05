import Teamscore from '../teamscore';
import Stack from '@mui/material/Stack';

function app () {
    return (
    <>
    <Stack direction="row" spacing={2}>
    <Teamscore teamName= {"teamA"}/>
    <Teamscore teamName= {"teamB"}/>
    </Stack>
    </>
    )
}
export default app
import { ListItem, Checkbox, Typography, Box, styled } from "@mui/material";
import { StarBorder, Star } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes2/routes";

const Wrapper = styled(ListItem)`
    padding: 0 0 0 10px;
    background: #f2f6fc;
    cursor: pointer;
    & > div {
        display: flex;
        width: 100%
    }
    & > div > p {
        font-size: 14px;
    }
`;

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;

const DateText = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
})

const Email = ({ email, selectedEmails, setStarredEmail, setSelectedEmails }) => {
    
    const navigate = useNavigate();

    const toggleStarredEmail = () => {
       
        setStarredEmail(prevState => !prevState);
    }

    const handleChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prevState => [...prevState, email._id]);
        }
    }

    return (
        <Wrapper>
            <Checkbox 
                size="small" 
                checked={selectedEmails.includes(email._id)}
                onChange={handleChange} 
            />
            { 
                email.starred ? 
                    <Star fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredEmail()} />
                : 
                    <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredEmail()} /> 
            }
            <Box onClick={() => navigate(routes.view.path, { state: { email: email }})}>
                <Typography style={{ width: 200 }}>From: {email.from.split('@')[0]}</Typography>
                
                <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
                <DateText>
                    {(new window.Date(email.sentAt)).getDate()}&nbsp;
                    {(new window.Date(email.sentAt)).toLocaleString('default', { month: 'long'}, { year: 'long'})}
                </DateText>
            </Box>
        </Wrapper>
    )
}

export default Email;

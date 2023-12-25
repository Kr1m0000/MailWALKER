import { useEffect, useState, useContext } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { Box, List, Checkbox, CircularProgress } from '@mui/material';
import Email from './Email';
import { DeleteOutline } from '@mui/icons-material';
import { UidContext } from '../AppContext';
import axios from 'axios';

const Emails = ({openDrawer}) => {
    const [receivedEmails, setReceivedEmails] = useState([]);
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const apiUrl = process.env.REACT_APP_API_URL;
    const uid = useContext(UidContext);

   


    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const response = await axios.get(`${apiUrl}api/user/${uid}`);
                setUserEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching user email:', error);
            }
        };

        const fetchReceivedEmails = async () => {
            try {
                const response = await axios.post(`${apiUrl}api/email/inbox`, {
                    email: userEmail,
                });
                setReceivedEmails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching received emails:', error);
                // Handle error
                setLoading(false);
            }
        };

        fetchUserEmail();
        fetchReceivedEmails();
    }, [uid, userEmail, apiUrl]);

    const selectAllEmails = (e) => {
        if (e.target.checked) {
            const allEmailIds = receivedEmails.map((email) => email._id);
            setSelectedEmails(allEmailIds);
        }else {
            setSelectedEmails([]);
        }
       
    };

    const deleteSelectedEmails = () => {
        // Implement the logic to delete selected emails
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box style={openDrawer ? { marginLeft: 200, width: '86%' } : { marginLeft: 16, width: '100%' } }>
            <Box style={{ padding: '20px 10px 0px 10px', display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" onChange={selectAllEmails} />
                <DeleteOutline onClick={deleteSelectedEmails} />
            </Box>
            <List>
                {receivedEmails.map((email) => (
                    <Email
                        email={email}
                        key={email._id}
                        selectedEmails={selectedEmails}
                        setSelectedEmails={setSelectedEmails}
                    />
                ))}
            </List>
        </Box>
    );
};

export default Emails;

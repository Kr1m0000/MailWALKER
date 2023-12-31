import React, { useState, useEffect, useContext } from 'react';
import { ListItem, Checkbox, Typography, Box, styled } from '@mui/material';
import { StarBorder, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UidContext } from '../AppContext';

const Wrapper = styled(ListItem)`
    padding: 10px;
    background: #f2f6fc;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px; /* Add rounded corners */
    margin-bottom: 16px; /* Add more margin between Note components */

    & > div {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    & > div > p {
        font-size: 40px; /* Increase font size for paragraphs */
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10px; /* Add more margin to separate lines */
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
    fontSize: 5,
    color: '#5F6368',
});



const Note = ({ note, selectedNotes, setSelectedNotes }) => {
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
    const uid = useContext(UidContext);
   

   

    const handleChange = () => {
        if (selectedNotes.includes(note._id)) {
            setSelectedNotes((prevState) => prevState.filter((id) => id !== note._id));
        } else {
            setSelectedNotes((prevState) => [...prevState, note._id]);
        }
    };

    return (
        <Wrapper>
            <Checkbox size="small" checked={selectedNotes.includes(note._id)} onChange={handleChange} />
           
            <Box
                // onClick={() => navigate("/email/view", { state: { note: note } })}
            >
                <Typography style={{ width: 200 }}></Typography>
                 
                <Typography>
                    {note.body}
                </Typography>
             

                {/* <DateText>
                    {new window.Date(note.sentAt).getDate()}&nbsp;
                    {new window.Date(note.sentAt).toLocaleString('default', {
                        month: 'long',
                    })}
                </DateText> */}
            </Box>
        </Wrapper>
    );
};

export default Note;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/index'; 

const UserCard = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const UserList = () => {
  const dispatch = useDispatch(); 
  
  // estado de los usuarios
  const {users} = useSelector(state => state.users); 

  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]);

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id}>
          <StyledLink to={`/users/${user.id}/todos`}>
            <h2>{user.name}</h2>
          </StyledLink>
          <p>{user.email}</p>
        </UserCard>
      ))}
    </div>
  );
};

export default UserList;

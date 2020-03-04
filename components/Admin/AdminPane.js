import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import withQueryAdmins from "../../model/query/withQueryAdmins";
import { Typography, Table } from 'antd';
const { Title } = Typography;

const ListItem = styled.li`
  list-style-type: none;
  border: black solid 1px;
`;

const columns = [
  {
    title: '管理者帳號',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '備註',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: '創建時間',
    dataIndex: 'created_at',
    key: 'created_at',
  },
];

const Admins = input => {
  const { data } = input;
  const { loading, error, admins } = data;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const lists = admins.map(admin => (
    <ListItem key={admin.id}>
      {admin.id} : {admin.name}{" "}
    </ListItem>
  ));
  console.log('admins list :', lists);

  return (
    <>
      <Title level={1}>管理者管理</Title>
      <Table dataSource={lists} columns={columns} />
    </>
  );
};

Admins.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape({}),
    admins: PropTypes.arrayOf(PropTypes.shape({}))
  })
};

export default withQueryAdmins(Admins);

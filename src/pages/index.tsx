import { navigate } from 'gatsby';
import React from 'react';
import keys from 'lodash/keys';
import { useNavData } from '../components/Nav';

export default function Home() {
  const data = useNavData();
  const frontPage = data['components'] ? data['components'][0] : data[keys(data)[0]][0];
  if (frontPage?.node?.fields?.route && typeof window !== 'undefined') {
    navigate(frontPage.node.fields.route);
    return '';
  }
  return <p>No front page found!</p>;
}

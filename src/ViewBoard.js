import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const ViewBoards = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch('http://10.0.2.2:3000/getAllBoards');
        const json = await response.json();
        if (json.success) {
          setBoards(json.boards);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoards();
  }, []);

  return (
    <View>
      <FlatList
        data={boards}
        keyExtractor={item => item.board_id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.board_title}</Text>
            <Text>{item.board_content}</Text>
            <Text>{item.board_mid}</Text>
            <Text>{item.board_category}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ViewBoards;

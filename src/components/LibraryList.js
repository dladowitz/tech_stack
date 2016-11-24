import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ListItem from './ListItem.js'

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // this seems like its setting state or a function
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// This is the redux state
const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

// map the first return of the connect() to prop of LibraryList
export default connect(mapStateToProps)(LibraryList);

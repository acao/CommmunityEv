//
// var DivesitesList = React.createClass({
//   watchID: (null: ?number), // to store geolocation watcher
//
//   observe: function() {
//     // The results will be available at this.data.divesites
//     return {
//       divesites: (new Parse.Query('divesite')).near('location', this.state.position)
//     };
//   },
//
//   getInitialState: function () {
//     return {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       }),
//       loading: true,
//       position: undefined,
//     };
//   },
//
//   componentDidUpdate: function(prevProps, prevState) {
//     if (prevState.loading && (this.pendingQueries().length == 0)) {
//       this.setState({ loading: false });
//     }
//   },
//
//   componentDidMount: function() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({position: positionToGeoPoint(position)}),
//       (error) => alert(error.message),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
//     );
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       positionToGeoPoint(position)
//       this.setState({position: positionToGeoPoint(position)});
//     });
//   },
//
//   componentWillUnmount: function() {
//     navigator.geolocation.clearWatch(this.watchID);
//   },
//
//   reloadListView: function() {
//     this.refreshQueries();
//   },
//
//   render: function() {
//     if (this.state.loading) {
//       return this.renderLoadingView();
//     }
//
//     return (
//       <RefreshableListView
//         dataSource={this.state.dataSource.cloneWithRows(this.data.divesites)}
//         renderRow={this.renderDivesiteView}
//         style={styles.listView}
//         loadData={this.reloadListView}
//         refreshDescription="Finding divesites nearby…"
//         renderHeaderWrapper={this.renderHeaderWrapper}
//       />
//     );
//   },
//
//   renderDivesiteView: function(divesite) {
//     var src = mapImageSrc(divesite.location)
//     return (
//       <TouchableHighlight onPress={this.showDivesite.bind(this, divesite)}>
//         <View style={styles.rowContainer}>
//           <View style={styles.rightContainer}>
//             <Text style={styles.title}>{divesite.name}</Text>
//             <Text style={styles.subtitle}>{divesite.address}</Text>
//           </View>
//           <Image style={styles.thumb} source={{uri: src}} />
//         </View>
//       </TouchableHighlight>
//     );
//   },
//   renderLoadingView: function() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading…
//         </Text>
//       </View>
//     );
//   },
//   renderHeaderWrapper: function(refreshingIndicator) {
//     return (
//       <View>
//         {refreshingIndicator}
//       </View>
//     )
//   },
//   showDivesite: function(divesite) {
//     this.props.navigator.push({
//       component: DivesiteShow,
//       passProps: { divesite },
//     });
//   },
// });
//
// var DivesiteShow = React.createClass({
//   render: function() {
//     var divesite = this.props.divesite;
//     var src = mapImageSrc(divesite.location, {width: 800, height: 400});
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>{divesite.name}</Text>
//         <Text style={styles.subtitle}>{divesite.address}</Text>
//         <Image style={styles.map} source={{uri: src}} />
//         <TouchableHighlight
//           style={styles.button}
//           onPress={this.logDive.bind(this, divesite)}>
//             <Text style={styles.buttonText}>Log a dive here…</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   },
//
//   logDive: function(divesite) {
//     this.props.navigator.push({
//       component: DivesiteLog,
//       passProps: { divesite },
//     });
//   },
// });
//
// var DivesiteLog = React.createClass({
//   mixins: [ParseReact.Mixin],
//
//   observe: function() {
//     // blank on purpose
//   },
//
//   getDefaultProps: function () {
//     return {
//       date: new Date(),
//       timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
//     };
//   },
//
//   getInitialState: function() {
//     return {
//       date: this.props.date,
//       timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
//     };
//   },
//
//   render: function() {
//     var divesite = this.props.divesite;
//
//     return (
//       <ScrollView
//         ref='scrollView'
//         contentContainerStyle={styles.container}
//         keyboardDismissMode='on-drag'
//       >
//         <Text style={styles.subtitle}>Log dive in</Text>
//         <Text style={styles.title}>{divesite.name}</Text>
//         <Text style={styles.subtitle}>{divesite.address}</Text>
//         <Text style={styles.label}>Start Time</Text>
//         <DatePickerIOS
//           date={this.state.date}
//           mode="datetime"
//           timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
//           onDateChange={this.onDateChange}
//         />
//         <Text style={styles.label}>Max. Depth (meters)</Text>
//         <TextInput
//           ref='maxDepth'
//           style={styles.input}
//           onFocus={inputFocused.bind(this, 'maxDepth')}
//           keyboardType='numeric'
//           onChange={this.onInputMaxDepth}
//         />
//         <Text style={styles.label}>Water Temperature (celsius)</Text>
//         <TextInput
//           ref='temperature'
//           style={styles.input}
//           onFocus={inputFocused.bind(this, 'temperature')}
//           keyboardType='numeric'
//           onChange={this.onInputTemp.bind(this)}
//         />
//         <TouchableHighlight
//           style={styles.button}
//           onPress={this.log}>
//             <Text style={styles.buttonText}>Log it</Text>
//         </TouchableHighlight>
//       </ScrollView>
//     );
//   },
//
//   onDateChange: function(date) {
//     this.setState({
//       date: date
//     });
//   },
//
//   onInputMaxDepth: function(event) {
//     this.setState({
//       maxDepth: parseFloat(event.nativeEvent.text)
//     });
//   },
//
//   onInputTemp: function(event) {
//     this.setState({
//       temperature: parseFloat(event.nativeEvent.text)
//     });
//   },
//
//   log: function() {
//     var divesite = this.props.divesite;
//     var data = {
//       start: this.state.date,
//       maxDepth: this.state.maxDepth,
//       temperature: this.state.temperature,
//     };
//
//     ParseReact.Mutation.Create('dive', data)
//       .dispatch()
//       .then(function(dive) {
//         ParseReact.Mutation.AddRelation(dive, 'divesite', divesite).dispatch();
//       })
//       .then(this.handleSuccess)
//       .fail(handleError);
//   },
//
//   handleSuccess: function(dive) {
//     alert("Dive logged!");
//     this.props.navigator.pop();
//   },
// });

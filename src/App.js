import React, { Component } from 'react';
import './App.css';

const data = [
  { label: 'Chipotle',
    description: 'Burrito burrito',
    id: 1
  },
  { label: 'Wasabi',
    description: 'Sushiiii',
    id: 2
  },
  { label: 'Nandos',
    description: 'Chicken chicken',
    id: 3
  }
];

class Tabs extends Component {
  state = {
    activeTab: 0
  };

  selectTab = (activeTab) => {
    this.setState({
      activeTab
    });
  }

  renderTabs = () => {
    const { data } = this.props
    return data.map((tab, index) => (
      <button
        className={this.state.activeTab === index ? "active-tab" : "tab"}
        onClick={() => this.selectTab(index)}
        key={tab.id}
      >
        {tab.label}
      </button>
    ));
  };

  renderPanels = () => {
    const tab = this.props.data[this.state.activeTab];
    return <div className="panel">{tab.description}</div>
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
        {this.renderPanels()}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Tabs data={data} />
      </div>
    );
  }
}

// Bottom
// class Tabs extends Component {
//   static defaultProps = {
//     displayBottom: false
//   };

//   state = {
//     activeTab: 0
//   };

//   selectTab = (activeTab) => {
//     this.setState({
//       activeTab
//     });
//   }

//   renderTabs = () => {
//     const { data } = this.props
//     return data.map((tab, index) => (
//       <button
//         className={this.state.activeTab === index ? "active-tab" : "tab"}
//         onClick={() => this.selectTab(index)}
//         key={tab.id}

//       >
//         {tab.label}
//       </button>
//     ));
//   };

//   renderPanels = () => {
//     const tab = this.props.data[this.state.activeTab];
//     return <div className="panel">{tab.description}</div>
//   }

//   render() {
//     const tabs = (
//       <div key="tabs">
//         {this.renderTabs()}
//       </div>
//     );

//     const panels = <div key="panels">{this.renderPanels()}</div>;

//     return (
//       <div>
//           {this.props.displayBottom
//           ? [panels, tabs]
//           : [tabs, panels]}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Tabs data={data} displayBottom />
//       </div>
//     );
//   }
// }

// Disabled
// class Tabs extends Component {
//   static defaultProps = {
//     displayBottom: false,
//     disabledTabs: []
//   }
  
//   state = {
//     activeTab: 0
//   };

//   selectTab = activeTab => {
//     this.setState({
//       activeTab
//     });
//   }

//   renderTabs = () => {
//     const { data } = this.props
//     return data.map((tab, index) => {
//       const isActive = this.state.activeTab === index;
//       const isDisabled = this.props.disabledTabs.indexOf(index) !== -1;

//       const tabProps = {
//         key: tab.label,
//         className: isDisabled ? "disabled-tab" : (
//           isActive ? "active-tab" : "tab"
//         ),
//         onClick: () => this.selectTab(index)
//       };

//       if (isDisabled) {
//         tabProps.disabled = true;
//       }

//       return (
//         <button {...tabProps}>
//           {tab.label}
//         </button>
//       );
//     });
//   };

//   renderPanels = () => {
//     const tab = this.props.data[this.state.activeTab];
//     return <div className="panel" key='panels'>{tab.description}</div>
//   }

//   render() {
//     const tabs = (
//       <div key='tabs'>
//         {this.renderTabs()}
//       </div>
//     );

//     const panels = <div key="panels">{this.renderPanels()}</div>;

//     return (
//       <div>
//           {this.props.displayBottom
//           ? [panels, tabs]
//           : [tabs, panels]}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Tabs data={data} disabledTabs={[ 1 ]} />
//       </div>
//     );
//   }
// }

/// Child components
// class TabList extends Component {
//  render() {
//    const children = React.Children.map(this.props.children, (child, index) => {
//      return React.cloneElement(child, {
//        isActive: index === this.props.activeIndex,
//        onClick: () => this.props.handleSelectTab(index)
//      })
//    })

//    return <div>{children}</div>
//  }
// }

// class Tab extends Component {
//  render() {
//    const { isActive, isDisabled, onClick, children } = this.props;
//    return (
//      <button
//       className={this.props.isDisabled ? "disabled-tab" : (
//         isActive ? "active-tab" : "tab"
//       )}
//       disabled={isDisabled}
//       onClick={onClick}
//      >
//        {children}
//      </button>
//    )
//  }
// }

// class TabPanels extends Component {
//  render() {
//    return (
//      <div>
//        {this.props.children[this.props.activeIndex]}
//      </div>
//    )
//  }
// }

// class TabPanel extends Component {
//  render() {
//    return <div>{this.props.children}</div>
//  }
// }

// class Tabs extends Component {
//   state = {
//     activeIndex: 0
//   }

//   selectTab = activeIndex => {
//     this.setState({
//       activeIndex
//     });
//   }

//  render() {
//    const children = React.Children.map(this.props.children, (child, index) => {
//      if (child.type === TabPanels) {
//        return React.cloneElement(child, {
//          activeIndex: this.state.activeIndex
//        })
//      } else if (child.type === TabList) {
//        return React.cloneElement(child, {
//          activeIndex: this.state.activeIndex,
//          handleSelectTab: this.selectTab
//        })
//      } else {
//        return child
//      }
//    })

//    return <div>{children}</div>
//  }
// }

// class App extends Component {
//  render() {
//    return (
//      <div className="container">
//        <Tabs>
//          <TabList>
//            <Tab>Chipotle</Tab>
//            <Tab isDisabled>Wasabi</Tab>
//            <Tab>Nandos</Tab>
//          </TabList>

//          <TabPanels>
//            <TabPanel>
//              <p>Burrito burrito</p>
//            </TabPanel>
//            <TabPanel>
//              <p>Sushiiii</p>
//            </TabPanel>
//            <TabPanel>
//              <p>Chicken chicken</p>
//            </TabPanel>
//          </TabPanels>
//        </Tabs>
//        <DataTabs data={data} />
//      </div>
//    )
//  }
// }

// class DataTabs extends Component {
//   render() {
//     return (
//       <Tabs>
//         <TabList>
//           {this.props.data.map((tab) => (
//             <Tab key={tab.id}>{tab.label}</Tab>
//           ))}
//         </TabList>

//         <TabPanels>
//           {this.props.data.map((tab) => (
//             <TabPanel key={tab.id}>{tab.description}</TabPanel>
//           ))}
//         </TabPanels>
//       </Tabs>
//     )
//   }
// }

export default App
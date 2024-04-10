import GridLayout from 'react-grid-layout';

export default function project() {
    const layout_Config = [
        { i: 'dashboard', x: 0, y: 0, w: 2, h: 3, static: false },
        { i: 'main', x: 2, y: 0, w: 4, h: 3, static:false},
        { i: 'rightboard', x: 6, y: 0, w: 2, h: 10, static:false}
      ]
      return (
        <div>
          <GridLayout className="example-layout" layout={layout_Config} cols={12} rowHeight={30} width={1200}>
            <div className="dashboard" key="dashboard" style={{ background: '#ff4d4f' }}>
              <h1>DashBoard</h1>
            </div>
            <div className="main" key="main" style={{ background: '#73d13d' }}>
              <h1>main-content</h1>
            </div>
            <div className="rightboard" key="rightboard" style={{ background: '#40a9ff' }}>
              <h1>rightboard</h1>
            </div>
          </GridLayout>
        </div>
      );
}
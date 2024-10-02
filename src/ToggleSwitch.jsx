

export default function ToggleSwitch() {
    return (
      <div className='toggle-container'>
  
      <h3>Sort by Alphabetical Order</h3>
      <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch-input" />
        <span className="toggle-switch-slider"></span>
      </label>
      </div>
    );
  }
export default function UpgradesDisplay({
  setCookies,
  setCpc,
  setCps,
  cookies,
  cpc,
  cps,
  upgradeData,
  upgradeLevel,
  setUpgradeLevel,
  save,
}) {
  //--------------------------------------------Btn Audio
  function playUpgradeSound() {
    const upgradeSound = new Audio("/yay.mp3");
    upgradeSound.play();
  }

  //---------------------------------------------Upgrade function
  function handleUpgrade(upgradeType, upgradeLevel) {
    let currentId = upgradeType.id; //get id to use as index to navigate upgradeLevel array
    const currentCost =
      upgradeType.cost + upgradeLevel[currentId] * upgradeType.cost * 0.2; // current cost equation

    if (cookies >= currentCost) {
      playUpgradeSound();
      setCookies(cookies - currentCost);

      //create new updated upgradeLevel array
      const nextLevels = upgradeLevel.map((level, index) => {
        if (index === currentId) {
          return level + 1;
        } else {
          return level;
        }
      });

      setUpgradeLevel(nextLevels);
      if (currentId == 0) {
        setCpc(cpc + upgradeType.increase);
      } else {
        setCps(cps + upgradeType.increase);
      }
      save();
    }
  }

  return (
    <div id="upgradesDisplay">
      {upgradeData.map((upgradeType, index) => (
        <div key={upgradeType.id}>
          <h3 id="upgradeTitle">{upgradeType.name}</h3>
          <button
            id="upgradeBtn"
            disabled={
              upgradeType.cost + upgradeLevel[index] * upgradeType.cost * 0.2 >
              cookies
                ? true
                : false
            }
            onClick={() => handleUpgrade(upgradeType, upgradeLevel)}
          >
            Upgrade
          </button>
          <h4 id="upgradeCost">
            Cost:
            {upgradeType.cost + upgradeLevel[index] * upgradeType.cost * 0.2}
          </h4>
        </div>
      ))}
    </div>
  );
}

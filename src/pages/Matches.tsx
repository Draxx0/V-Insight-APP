import AppLayout from '../layouts/app/AppLayout';

const MatchesPage = () => {
  return (
    <AppLayout>
      <div className="flex">
        <div className="w-2/3 bg-main-gradient">
          <div className="flex justify-between">
            <div className="space-y-2">
              <p>Top Agent</p>
              <div className="space-y-2">
                <div className="flex">
                  <img src="" alt="" />
                  <div className="space-y-1">
                    <p>Jett</p>
                    <p>34% Pick rate</p>
                  </div>
                  <div className="space-y-1">
                    <p>42.1%</p>
                    <p>Win rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-main-gradient"></div>
      </div>
    </AppLayout>
  );
};

export default MatchesPage;

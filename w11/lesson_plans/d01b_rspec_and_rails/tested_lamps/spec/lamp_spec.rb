require_relative '../lib/lamp.rb'

describe Lamp do

  let :lamp do
    Lamp.new(100)
  end

  describe '#status' do
    it 'has a status' do
      expect(lamp.status).not_to eq(nil)
    end

    it 'starts with a status of false' do
      expect(lamp.status).to eq(false)
    end
  end

  describe '#wattage' do
    it 'has a wattage' do
      expect(lamp.wattage).not_to be_nil
    end

    it 'starts with the specified wattage' do
      expect(lamp.wattage).to eq(100)
    end
  end

  describe '#switch' do
    it 'inverts the status of the lamp' do
      old_status = lamp.status
      lamp.switch
      expect(lamp.status).to eq(!old_status)
    end
  end
end

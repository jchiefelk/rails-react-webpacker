require 'test_helper'

class ValidatorControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get validator_index_url
    assert_response :success
  end

end
